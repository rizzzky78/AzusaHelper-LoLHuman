const { ICommand } = require('@libs/builders/command/command.builder')
const { lolhuman } = require('@libs/constants/api/api.constant')

/**
 * @type { ICommand }
 */
module.exports = {
    aliases: ['cecan'],
    category: 'misc',
    description: 'Pencari Pict Cewek Cantik',
    waitMessage: true,
    minArgs: 1,
    expectedArgs: 'cecan',
    example: '{prefix}{command} cecan',
    callback: async ({ msg, args }) => {
        // https://api.lolhuman.xyz/api/random/cecan?apikey=rizzzuchi78apikey
        const result = await lolhuman.cecan(args[0])
        return msg.replyImage(result)
    },
}
