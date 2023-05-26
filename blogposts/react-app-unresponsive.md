---
title: 'React-app unresponsiveness error'
date: '2023-05-23'
---

Erm, I know it will sound funny but for two condecutive days I kept restarting my machine, relaunching ***npm run dev** but the browser kept saying unresponsive without throwing an error on the terminal. Can you tell how frustrating that can be? yeah right!

Whenever you get that kind of problem, first go through your code there might be an infinite loop that keeps breaking your code. ***infinite loop*** mostly occurs when a component continually re-renders without a condition to break the loop. Guess what? I had imported a component twice so it couldn't find an exit this made my entire code break.

Check your code and avoid recursive function calls. It may happen accidentally I get it but double check yur function calls and ensure hat they terminate at some point.

Bye! I hope this helps..

  



