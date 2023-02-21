# git fetch

How to use git fetch to merge changes on a local machine.

## Instructions.

1. Get the fork URL and branch. For example `https://github.com/Square789/funkin-resources` and `main`.
2. Run `git fetch https://github.com/Square789/funkin-resources main:Square789`
    - This downloads the branch to your repo with the new name `Square789`.
3. You can now call `git merge Square789` to start the merge.
4. In each file, resolve merge conflicts. 
    - VSCode has a tool to automatically detect and provide a convenient interface for resolving conflicts.
    - You can also manually edit the files at this time as well.
5. Call `git add README.md` once the conflicts in that file are done.
    - Then, continue to the next file if needed.
6. Once all merge conflicts are resolved, call `git merge --continue`.
    - This will commit the changes and complete the merge.
7. Call `git push` once all changes are successful.
    - Once the merge is committed and pushed, Github will automatically recognize the changes as merged and close the pull request.

This is much better than copying changes in and closing the repository, as it ensures credit for contributions is properly given.
