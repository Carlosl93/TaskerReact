import React from 'react';
import { map, get } from 'lodash';

import styled from 'styled-components';

// ----- Import Components ----- //
import Currency from './Currency.js';
// ----- ----------------- ----- //

// ----- Placeholder Data ----- //
const data = {
    currencies: [
        {
            text: 'USD'
        },
        {
            text: 'EUR'
        },
        {
            text: 'CLP'
        }
    ],
    isActive: 2
};
// ----- ----------------- ----- //

const CurrencyContainer = styled.div`
    width: 80%;
    height: 90%;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class SelectCurrency extends React.Component {
    constructor() {
        super();
        this.state = { isActive: data.isActive };
    }

    checkActive = (i) => {
        this.setState({ isActive: i });
    }

    render() {
        return (
            <CurrencyContainer>
                {
                    map(
                        get(data, "currencies"),
                        (item, i) => {
                            let props = {
                                isActive: i === this.state.isActive ? true : false,
                                text: item.text,
                                checkActive: () => this.checkActive(i)
                            };
                            return (
                                <Currency {...props} />
                            )
                        }
                    )
                }
            </CurrencyContainer>
        )
    }
}

export default SelectCurrency;