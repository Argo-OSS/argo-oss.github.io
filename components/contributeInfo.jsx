import { useEffect, useState, useRef } from 'react';
import { Octokit } from 'octokit';
import { useTheme } from 'nextra-theme-docs';
import Table from './common/table';

const gitProfileBuilder = userInfo => (
  <div className="flex items-center">
    <div className="w-7 h-7 flex-shrink-0 mr-2 sm:mr-3">
      <img className="rounded-full" src={userInfo.avatar_url} alt={userInfo.login} />
    </div>
    <a href={userInfo.html_url} className="font-medium hover:underline">
      {userInfo.login}
    </a>
  </div>
);

const gitIssueSummaryBuilder = issueInfo => (
  <a key={issueInfo.id} href={issueInfo.html_url} className="font-medium text-blue-600 hover:underline">
    {issueInfo.title}
  </a>
);

const IssueLabel = ({ children, colorClass }) => <span className={'text-[8px] font-semibold inline-block px-1 rounded-full last:mr-0 mr-1 ' + colorClass}>{children}</span>;

const gitIssueTypeBuilder = (issueTypeInfo, cloasedAt) => {
  const margedLabel = <IssueLabel colorClass={'text-blue-600 bg-blue-200'}>MERGED</IssueLabel>;
  const openedLabel = <IssueLabel colorClass={'text-emerald-600 bg-emerald-200'}>OPENED</IssueLabel>;
  const closedLabel = <IssueLabel colorClass={'text-red-600 bg-red-200'}>CLOSED</IssueLabel>;

  const prMarged = (
    <div>
      <span className="mr-1 font-semibold">PR</span>
      {margedLabel}
    </div>
  );
  const prOpened = (
    <div>
      <span className="mr-1 font-semibold">PR</span>
      {openedLabel}
    </div>
  );

  const prClosed = (
    <div>
      <span className="mr-1 font-semibold">PR</span>
      {closedLabel}
    </div>
  );

  const issue = (
    <div>
      <span className="mr-1 font-semibold">ISSUE</span>
    </div>
  );

  const issueType = issueTypeInfo ? (issueTypeInfo.merged_at ? prMarged : cloasedAt ? prClosed : prOpened) : issue;
  return issueType;
};

const gitIssueBuilder = async githubId => {
  const octokit = new Octokit({});
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'argoproj',
    repo: 'argo-workflows',
    creator: githubId,
    state: 'all',
    headers: { 'X-GitHub-Api-Version': '2022-11-28' },
  });

  const issueObj = response.data;

  return issueObj.map(issue => ({
    GitHub: {
      data: gitProfileBuilder(issue.user),
      searchLabel: issue.user.login,
    },
    Type: {
      data: gitIssueTypeBuilder(issue.pull_request, issue.closed_at),
      searchLabel: issue.pull_request ? 'PR' : 'ISSUE',
    },
    Summary: {
      data: gitIssueSummaryBuilder(issue),
      searchLabel: null,
    },
  }));
};

const contributeInfoBuilder = async contributers => {
  const promise = contributers.map(async contributer => await gitIssueBuilder(contributer));
  const contributeInfo = await Promise.all(promise);
  const flatInfo = contributeInfo.flat();
  const sortedInfo = flatInfo.sort((a, b) => b.Type.searchLabel.localeCompare(a.Type.searchLabel)).sort((a, b) => a.GitHub.searchLabel.localeCompare(b.GitHub.searchLabel));
  return sortedInfo;
};

const ContributeInfo = ({ contributers = [] }) => {
  const [issueList, setIssueList] = useState([]);
  const { current: contributersRef } = useRef(contributers);

  const { theme } = useTheme();

  useEffect(() => {
    contributeInfoBuilder(contributersRef).then(data => setIssueList(data));
  }, [contributersRef, contributeInfoBuilder, setIssueList, theme]);

  const contributeSummary = (
    <div className="grid grid-cols-3 gap-5 mt-2 text-center text-gray-600 text-sm">
      <div className="grid grid-cols-3">
        <div className="col-span-2 bg-orange-200 p-3 rounded-l-md font-semibold">TOTAL COUNT</div>
        <div className="bg-gray-100 p-3 rounded-r-md font-semibold text-orange-400">{issueList.length}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 bg-blue-100 p-3 rounded-l-md font-medium">PR COUNT</div>
        <div className="bg-gray-100 p-3 rounded-r-md font-medium text-blue-600">{issueList.filter(issue => issue.Type.searchLabel === 'PR').length}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 bg-gray-200 p-3 rounded-l-md font-medium">ISSUE COUNT</div>
        <div className="bg-gray-100 p-3 rounded-r-md font-medium">{issueList.filter(issue => issue.Type.searchLabel === 'ISSUE').length}</div>
      </div>
    </div>
  );

  return (
    <Table
      tableTitle="Contribute Info"
      subTitle={contributeSummary}
      theme={theme}
      colums={[
        {
          columTitle: 'GitHub',
          filter: true,
        },
        {
          columTitle: 'Type',
          filter: true,
        },
        {
          columTitle: 'Summary',
          filter: false,
        },
      ]}
      rows={issueList}
    />
  );
};

export default ContributeInfo;
