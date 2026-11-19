CODEDOJO DAILY - PROJECT NOTES
================================

WHAT THIS PROJECT DOES
----------------------
CodeDojo Daily is a small browser-based coding practice website. A learner can
sign in with a name, open daily challenges, write code, run available tests,
join a team, view the leaderboard and check their progress.

HOW TO RUN IT
-------------
1. Extract the ZIP file into a folder.
2. Open the codedojo-daily folder.
3. Open index.html in a modern browser.
4. For a smoother development workflow, open the folder in VS Code and use a
   local development server such as the Live Server extension.

MAIN FILES
----------
index.html  The page structure and the elements used by the app.
style.css   Colors, layout, responsive styles and animations.
script.js   Challenge data, browser storage, test checking, navigation,
            timers, teams, scoring and page rendering.
images/     Background images used by the different screens.

HOW THE CODE IS ORGANIZED
-------------------------
1. Challenge data: the list of JavaScript, Python, HTML and CSS exercises.
2. Local app data: sample accounts, teams, saved progress and drafts.
3. Scoring: points for difficulty, speed bonuses and daily streaks.
4. Test checking: JavaScript challenges run against test cases. Python, HTML
   and CSS activities are checked using simple rules rather than being run.
5. Page views: functions that build the content for each screen.
6. Navigation and actions: the URL hash changes screens, while button actions
   handle sign-in, challenge submission, team joining and team creation.

IMPORTANT PROJECT LIMITATIONS
-----------------------------
- Progress is stored in the current browser using localStorage. It is not a
  shared online database, so another device or browser will have separate data.
- The included sample users and scores are demonstration data.
- Python, HTML and CSS tasks use rule-based checks; those checks do not prove
  that a complete program or page behaves correctly in every situation.
- This is a front-end college project prototype, not a production coding judge.

SUGGESTED WAY TO PRESENT IT
---------------------------
Explain the project in your own words and be ready to show one challenge,
run its tests, create or join a team, and open the leaderboard. Make sure you
understand the scoring rules and the difference between executed JavaScript
checks and rule-based checks for the other activity types.
