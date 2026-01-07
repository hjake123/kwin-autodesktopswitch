workspace.windowAdded.connect(spreadWindowToEmptyDesktop);

function spreadWindowToEmptyDesktop(window) {
    if(windowIsRelevant(window) && !noWindowsOnDesktop(workspace.currentDesktop, window)) {
        for (const desktop of workspace.desktops) {
            if(noWindowsOnDesktop(desktop, window)) {
                window.desktops = [desktop];
                workspace.currentDesktop = desktop;
                break;
            }
        }
    }
}

function noWindowsOnDesktop(desktop, ignored) {
    for(const window of workspace.stackingOrder) {
        if(windowIsRelevant(window) && window.desktops.includes(desktop) && window != ignored && !window.minimized) {
            return false;
        }
    }
    return true;
}

function windowIsRelevant(window) {
    return window.normalWindow && !window.specialWindow && !window.transient && window.moveable && !window.hidden && !window.skipSwitcher && !window.skipPager;
}
