import {filter} from './src/filter.js'
import {count} from './src/count.js'
import {filterCommands,getCommand,countCommands} from './src/commands.js'

'use strict'

const args = process.argv

// USAGE: node app.js --filter=[PATTERN] OR node app.js filter=[PATTERN]
// USAGE: node app.js --count OR node app.js count

try {
    if (process.argv.length > 2) {
    const cmd = getCommand(args);
    if (filterCommands.includes(cmd[0])) {
        filter(cmd[1])
    } else if (countCommands.includes(cmd[0])) {
        count()
    } else {
        console.log('Wrong arguments')
    }
 }else {
    console.error('Expected at least one argument! (--filter | filter | --count | count )');
    process.exit(1);
 }
} catch(err) {
    throw err
}