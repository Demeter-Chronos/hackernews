import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql`
`

export default function CreateLink() {
    const [formState, setFormState] = useState({
        description: '',
        url: ''
    });

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.description}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                description: e.target.value
                            })
                        }
                        type="text"
                        placeholder="A description for the link"
                    />
                    <input
                        className="mb2"
                        value={formState.url}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                url: e.target.value
                            })
                        }
                        type="text"
                        placeholder="The URL for the link"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}