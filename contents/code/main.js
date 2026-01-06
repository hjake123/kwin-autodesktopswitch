workspace.windowAdded.connect(spreadWindowToEmptyDesktop);

function spreadWindowToEmptyDesktop(window) {
    if(window.normalWindow && !window.specialWindow && !window.transient && window.moveable && !window.hidden && !window.skipSwitcher && !window.skipPager) {
        for (const desktop of workspace.desktops) {
            if(noWindowsOnDesktop(desktop)) {
                window.desktops = [desktop];
                workspace.currentDesktop = desktop;
                break;
            }
        }
    }
}

function noWindowsOnDesktop(desktop) {
    for(const window of workspace.stackingOrder) {
        if(window.normalWindow && window.desktops.includes(desktop)) {
            return false;
        }
    }
    return true;
}

