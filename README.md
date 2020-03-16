# AVK-Project

# Git Steps [ Best-Practice-for-developement ]
NOTE : never work (push) at master branch !!!! NEVER !!!!
USECASE : you have a new task :  

# 1- check in which branch you already at.
    -> ~git branch
        example: ~ * master
        
# 2- create and switch to the new branch to work with in your current task.
    -> ~ git checkout -b [new branch name]
    -> ~ git --set-upstream origin [new branch name]
 PS: give relative name to the branch
 
# 3- do not forget to check/add/commit your work
    -> git status : to check the changes(ed) files.
    -> git add . : to stage your current changes
    -> git commit -m "relative message"
    -> git push
  
 # 4- after you finish your task, switch back to master branch and merge your final branch to it
    -> git checkout master : to switch back to master branch
    -> git merge [your-branch-name] : this will merge your branch to master
    -> git push
    PS : do not forget to validate all needed test and verifications in your branch before merge it to master

# REMAINDER : do not push any affected or untested branches to master, just to keep it clean and 100% healthy.

{to be continued for more details ...}
 

