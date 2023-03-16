const { BrowserWindow, Menu } = require("electron")
//定义菜单模板
const template = [
    {
        label: "文件",
        submenu: [
            {
                label: "新建窗口",
                click () {
                    new BrowserWindow({
                        width: 800,
                        height: 600
                    })
                }
            }
        ]
    },
    {
        label: "帮助(H)",
        submenu: [
            {
                label: "关于",
                click () {
                    new BrowserWindow({
                        width: 800,
                        height: 600
                    })
                }
            }
        ]
    }
]
 
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)