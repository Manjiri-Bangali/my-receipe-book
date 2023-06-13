import { SELECT_MULTIPLIER } from '../shared/constants';

export const selectMultipier = multiplier => {
    return {
        type: SELECT_MULTIPLIER,
        multiplier
    }
}