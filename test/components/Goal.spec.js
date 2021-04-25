import { Auth } from "aws-amplify";
import { beforeEach } from "detox";
import { describe, it } from "jest-circus";
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import GoalEditModal from '../../app/goals/screens/Goals';

describe('GoalEditModal', () => {
    describe('clicking submit', () => {
        const newTitle = 'Test Title Change';

        let getByTestId;

        beforeEach(() => {
            ({ getByTestId } = render(<GoalEditModal />));

            fireEvent.changeText(getByTestId('editText'), newTitle);
            fireEvent.press(getByTestId('editButton'));
        });

        it('makes the title blank', async() => {
            //const compo
            expect(getByTestId('editText').props.value).toEqual('');
        });
    });
});