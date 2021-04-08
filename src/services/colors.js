export function getColorType(type){
    switch (type) {
        case 'normal':
            return 'bg-gray-500';
            break;
        case 'fighting':
            return 'bg-red-700';
            break;
        case 'flying':
            return 'bg-gray-400';
        break;
        case 'poison':
            return 'bg-purple-500';
            break;
        case 'ground':
            return 'bg-yellow-700';
            break;
        case 'rock':
            return 'bg-yellow-800';
            break;
        case 'bug':
            return 'bg-green-400';
            break;
        case 'ghost':
            return 'bg-purple-800';
            break;
        case 'steel':
            return 'bg-gray-300';
            break;
        case 'fire':
            return 'bg-red-500';
            break;
        case 'water':
            return 'bg-blue-500';
            break;
        case 'grass':
            return 'bg-green-500';
            break;
        case 'electric':
            return 'bg-yellow-500';
            break;
        case 'psychic':
            return 'bg-red-400';
            break;
        case 'ice':
            return 'bg-blue-300';
            break;
        case 'dragon':
            return 'bg-blue-800';
            break;
        case 'dark':
            return 'bg-gray-800';
            break;
        case 'fairy':
            return 'bg-red-300';
            break;
        case 'unknown':
            return 'bg-gray-900';
        break;
        case 'shadow':
            return 'bg-gray-600';
            break;
        default:
            break;
    }
}