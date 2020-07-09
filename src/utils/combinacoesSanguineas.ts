
class CombinacoesTipoSanguineo {
    async recebe(tipoSanguineo) {
        switch (tipoSanguineo) {
            case 'A+':
                return ['A+', 'A-', 'O+', 'O-']
            case 'A-':
                return ['A-', 'O-']
            case 'B+':
                return ['B+', 'B-', 'O+', 'O-']
            case 'B-':
                return ['B-', 'O-']
            case 'AB+':
                return ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
            case 'AB-':
                return ['A-', 'B-', 'AB-', 'O-']
            case 'O+':
                return ['O+', 'O-']
            case 'O-':
                return ['O-']
        }
    };
    async doa(tipoSanguineo) {
        switch (tipoSanguineo) {
            case 'A+':
                return ['A+', 'AB+']
            case 'A-':
                return ['A+', 'A-', 'AB+', 'AB-']
            case 'B+':
                return ['B+', 'AB+']
            case 'B-':
                return ['B+', 'B-', 'AB+', 'AB-']
            case 'AB+':
                return ['AB+']
            case 'AB-':
                return ['AB+', 'AB-']
            case 'O+':
                return ['A+', 'B+', 'AB+', 'O+']
            case 'O-':
                return ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        }
    }
}

export default CombinacoesTipoSanguineo;