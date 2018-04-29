const team = {
    members: ['Manny', 'Pat'],
    teamName: 'Newcaslte United',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`
        })
    }
}

console.log(team.teamSummary())