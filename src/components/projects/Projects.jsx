import { useEffect, useState } from "react";
import Project from "./project/Project";
import "./Projects.scss";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([
    {
      id: 328479661,
      node_id: "MDEwOlJlcG9zaXRvcnkzMjg0Nzk2NjE=",
      name: "MafteiMugurel.github.io",
      full_name: "MafteiMugurel/MafteiMugurel.github.io",
      private: false,
      owner: {
        login: "MafteiMugurel",
        id: 68148027,
        node_id: "MDQ6VXNlcjY4MTQ4MDI3",
        avatar_url: "https://avatars.githubusercontent.com/u/68148027?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/MafteiMugurel",
        html_url: "https://github.com/MafteiMugurel",
        followers_url: "https://api.github.com/users/MafteiMugurel/followers",
        following_url:
          "https://api.github.com/users/MafteiMugurel/following{/other_user}",
        gists_url: "https://api.github.com/users/MafteiMugurel/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/MafteiMugurel/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/MafteiMugurel/subscriptions",
        organizations_url: "https://api.github.com/users/MafteiMugurel/orgs",
        repos_url: "https://api.github.com/users/MafteiMugurel/repos",
        events_url:
          "https://api.github.com/users/MafteiMugurel/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/MafteiMugurel/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/MafteiMugurel/MafteiMugurel.github.io",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io",
      forks_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/forks",
      keys_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/teams",
      hooks_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/hooks",
      issue_events_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/events",
      assignees_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/tags",
      blobs_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/languages",
      stargazers_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/stargazers",
      contributors_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/contributors",
      subscribers_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/subscribers",
      subscription_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/subscription",
      commits_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/merges",
      archive_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/downloads",
      issues_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/labels{/name}",
      releases_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/MafteiMugurel/MafteiMugurel.github.io/deployments",
      created_at: "2021-01-10T21:08:19Z",
      updated_at: "2022-08-31T09:02:40Z",
      pushed_at: "2022-08-31T17:01:13Z",
      git_url: "git://github.com/MafteiMugurel/MafteiMugurel.github.io.git",
      ssh_url: "git@github.com:MafteiMugurel/MafteiMugurel.github.io.git",
      clone_url: "https://github.com/MafteiMugurel/MafteiMugurel.github.io.git",
      svn_url: "https://github.com/MafteiMugurel/MafteiMugurel.github.io",
      homepage: "https://mafteimugurel.github.io/",
      size: 6563,
      stargazers_count: 2,
      watchers_count: 2,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ["portofolio"],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 2,
      default_branch: "main",
    },
    {
      id: 526319417,
      node_id: "R_kgDOH17_OQ",
      name: "Shopping-Website",
      full_name: "MafteiMugurel/Shopping-Website",
      private: false,
      owner: {
        login: "MafteiMugurel",
        id: 68148027,
        node_id: "MDQ6VXNlcjY4MTQ4MDI3",
        avatar_url: "https://avatars.githubusercontent.com/u/68148027?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/MafteiMugurel",
        html_url: "https://github.com/MafteiMugurel",
        followers_url: "https://api.github.com/users/MafteiMugurel/followers",
        following_url:
          "https://api.github.com/users/MafteiMugurel/following{/other_user}",
        gists_url: "https://api.github.com/users/MafteiMugurel/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/MafteiMugurel/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/MafteiMugurel/subscriptions",
        organizations_url: "https://api.github.com/users/MafteiMugurel/orgs",
        repos_url: "https://api.github.com/users/MafteiMugurel/repos",
        events_url:
          "https://api.github.com/users/MafteiMugurel/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/MafteiMugurel/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/MafteiMugurel/Shopping-Website",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/MafteiMugurel/Shopping-Website",
      forks_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/forks",
      keys_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/teams",
      hooks_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/hooks",
      issue_events_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/events",
      assignees_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/tags",
      blobs_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/languages",
      stargazers_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/stargazers",
      contributors_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/contributors",
      subscribers_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/subscribers",
      subscription_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/subscription",
      commits_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/merges",
      archive_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/downloads",
      issues_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/labels{/name}",
      releases_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/MafteiMugurel/Shopping-Website/deployments",
      created_at: "2022-08-18T17:57:40Z",
      updated_at: "2022-08-18T17:57:45Z",
      pushed_at: "2022-08-25T21:22:27Z",
      git_url: "git://github.com/MafteiMugurel/Shopping-Website.git",
      ssh_url: "git@github.com:MafteiMugurel/Shopping-Website.git",
      clone_url: "https://github.com/MafteiMugurel/Shopping-Website.git",
      svn_url: "https://github.com/MafteiMugurel/Shopping-Website",
      homepage: null,
      size: 2158,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 495316686,
      node_id: "R_kgDOHYXuzg",
      name: "Scoala-Informala-IT",
      full_name: "MafteiMugurel/Scoala-Informala-IT",
      private: false,
      owner: {
        login: "MafteiMugurel",
        id: 68148027,
        node_id: "MDQ6VXNlcjY4MTQ4MDI3",
        avatar_url: "https://avatars.githubusercontent.com/u/68148027?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/MafteiMugurel",
        html_url: "https://github.com/MafteiMugurel",
        followers_url: "https://api.github.com/users/MafteiMugurel/followers",
        following_url:
          "https://api.github.com/users/MafteiMugurel/following{/other_user}",
        gists_url: "https://api.github.com/users/MafteiMugurel/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/MafteiMugurel/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/MafteiMugurel/subscriptions",
        organizations_url: "https://api.github.com/users/MafteiMugurel/orgs",
        repos_url: "https://api.github.com/users/MafteiMugurel/repos",
        events_url:
          "https://api.github.com/users/MafteiMugurel/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/MafteiMugurel/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/MafteiMugurel/Scoala-Informala-IT",
      description: "ScoalaInformalaIT projects in one place.",
      fork: false,
      url: "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT",
      forks_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/forks",
      keys_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/teams",
      hooks_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/hooks",
      issue_events_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/events",
      assignees_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/tags",
      blobs_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/languages",
      stargazers_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/stargazers",
      contributors_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/contributors",
      subscribers_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/subscribers",
      subscription_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/subscription",
      commits_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/merges",
      archive_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/downloads",
      issues_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/labels{/name}",
      releases_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/MafteiMugurel/Scoala-Informala-IT/deployments",
      created_at: "2022-05-23T08:13:59Z",
      updated_at: "2022-05-23T13:13:02Z",
      pushed_at: "2022-08-05T09:07:20Z",
      git_url: "git://github.com/MafteiMugurel/Scoala-Informala-IT.git",
      ssh_url: "git@github.com:MafteiMugurel/Scoala-Informala-IT.git",
      clone_url: "https://github.com/MafteiMugurel/Scoala-Informala-IT.git",
      svn_url: "https://github.com/MafteiMugurel/Scoala-Informala-IT",
      homepage: "",
      size: 18475,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ["css", "html", "javascript", "reactjs", "school"],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/MafteiMugurel/repos?type=public&sort=pushed&per_page=6"
    )
      .then((response) => {
        return response.json();
      })
      .then((projects) => {
        if (projects) {
          setProjectsData(projects);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="portofolio" className="portofolio app-style">
      <div className="title">Portofolio</div>
      <div className="portofolio-content">
        {projectsData &&
          projectsData.map((project) => {
            return <Project projectInfo={project} key={project.id} />;
          })}
      </div>
      <div className="portofolio-button">
        <a
          className="app-button"
          href="https://github.com/MafteiMugurel"
          target="_blank"
        >
          View more on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
