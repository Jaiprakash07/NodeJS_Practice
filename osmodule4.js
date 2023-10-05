// Os Module (operating system)
// This module provides some basic utility function or method, shows information about operating system

{
    const os = require('os')

    const Architecture = os.arch()                          // method for showing CPU architecture
    console.log(Architecture)

    const Hostname = os.hostname()                          // method for showing hostname of the operating system
    console.log(Hostname)

    const Homedir = os.homedir()                            // method for showing home directory of current user
    console.log(Homedir)

    const Platform = os.platform()                          // method for showing operating system
    console.log(Platform)

    const Freememory = os.freemem()                         // method for showing system free memory in bytes (RAM)
    // console.log(Freememory)
    console.log(`${Freememory / 1024 / 1024 / 1024}`)       // For bytes into GB

    const Totalmemory = os.totalmem()                       // method for showing system total memory (RAM)
    // console.log(Totalmemory)
    console.log(`${Totalmemory / 1024 / 1024 / 1024}`)

    const Uptime = os.uptime()
    // console.log(Uptime)
    console.log(Uptime / 60)

    const Tmpdir = os.tmpdir()                              // method for showing default directory for temporary files
    console.log(Tmpdir)

    const Release = os.release()                            // method for showing os release
    console.log(Release)

    const Type = os.type()                                  // method for showing the type of operating system
    console.log(Type)

    const Version = os.version()                            // method for showing the window version or kernel version
    console.log(Version)

    // const Constant = os.constants.errno
    // console.log(Constant)

    // const ConstantSig = os.constants.signals
    // console.log(ConstantSig)
}