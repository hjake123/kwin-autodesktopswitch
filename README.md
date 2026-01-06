# Auto Window Desktop Spread
A simple KWin script that spreads out your active windows onto empty virtual desktops when possible to eliminate the effort of moving windows between virtual desktops all the time.

When a normal window that is not transient, movable, and is allowed to participate in task switching with Alt-Tab is spawned, it will automatically be placed on the numerically first free virtual desktop available. The user is then moved to that desktop to begin using the new window.

If no free virtual desktops exist, the window and user will not move anywhere.

While the activation conditions are designed to make sure only real application windows are affected, this relies on how the windows self-report their own purpose to KWin, so there is a chance of some poor behavior. If you run into anything, please leave an issue!
