as described here: https://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github

This will delete the commit history.

1. Checkout/create orphan branch (this branch won't show in git branch command):
  ```Bash
  git checkout --orphan latest_branch
  ```
2. Add all the files to the newly created branch:
  ```Bash
  git add -A
  ```
3. Commit the changes:
  ```Bash
  git commit -am "commit message"
  ```
4. Delete main (default) branch (this step is permanent):
  ```Bash
  git branch -D main
  ```
5. Rename the current branch to main:
  ```Bash
  git branch -m main
  ```
6. Finally, all changes are completed on your local repository, and force update your remote repository:
  ```Bash
  git push -f origin main
  ```
