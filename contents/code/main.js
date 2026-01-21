workspace.windowAdded.connect(spreadWindowToEmptyDesktop);

function spreadWindowToEmptyDesktop(window) {
    if(windowIsRelevant(window) && !noMatchingWindowsOnDesktop(workspace.currentDesktop, window)) {
        for (const desktop of workspace.desktops) {
            if(noMatchingWindowsOnDesktop(desktop, window)) {
                window.desktops = [desktop];
                workspace.currentDesktop = desktop;
                break;
            }
        }
    }
}

function noMatchingWindowsOnDesktop(desktop, ignored) {
    for(const window of workspace.stackingOrder) {
        if(windowIsRelevant(window) && window.desktops.includes(desktop) && window != ignored && !window.minimized && window.desktopFileName != ignored.desktopFileName) {
            return false;
        }
    }
    return true;
}

function windowIsRelevant(window) {
    return window.normalWindow && !window.specialWindow && !window.transient && window.moveable && !window.hidden && !window.skipSwitcher && !window.skipPager;
}
