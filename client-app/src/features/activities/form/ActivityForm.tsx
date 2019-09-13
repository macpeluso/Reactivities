import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "./../../../app/models/activity";
import { v4 as uuid } from "uuid";
interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}
const ActivityForm: React.FC<IProps> = ({
    setEditMode,
    activity: iniitialFormState,
    createActivity,
    editActivity
}) => {
    const initializeForm = () => {
        if (iniitialFormState) return iniitialFormState;
        else
            return {
                id: "",
                title: "",
                category: "",
                description: "",
                date: "",
                city: "",
                venue: ""
            };
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = { ...activity, id: uuid() };
            createActivity(newActivity);
        } else editActivity(activity);
    };

    const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value });
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    placeholder="Title"
                    value={activity.title}
                    name="title"
                    onChange={handleInputChange}
                />
                <Form.TextArea
                    rows={2}
                    placeholder="Description"
                    name="description"
                    value={activity.description}
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Category"
                    name="category"
                    value={activity.category}
                    onChange={handleInputChange}
                />
                <Form.Input
                    type="datetime-local"
                    placeholder="Date"
                    name="date"
                    value={activity.date}
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="City"
                    name="city"
                    onChange={handleInputChange}
                    value={activity.city}
                />
                <Form.Input
                    placeholder="Venue"
                    name="venue"
                    onChange={handleInputChange}
                    value={activity.venue}
                />
                <Button
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                />
                <Button
                    onClick={() => setEditMode(false)}
                    floated="right"
                    type="button"
                    content="Cancel"
                />
            </Form>
        </Segment>
    );
};

export default ActivityForm;