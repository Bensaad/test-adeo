
export const filterCommands = ['filter','--filter','f']
export const countCommands = ['count','--count','c']

export const getCommand = (args) => {
    const cmd = args[2].split("=");
    return cmd;
}