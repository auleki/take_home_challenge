import React from "react";

export type EventIconProps = {
    size?: number;
    color?: string;
}

export type ButtonProps = {
    text: string;
    onClick: MouseEvent<HTMLButtonElement>;
}

export type EventProps = {
    featured?: boolean;
    event: IEvent
}

export type EventInfoProps = {
    type: 'date' | 'fee' | 'location' | 'title' | 'date_featured';
    value: string | Date;
}

export interface IEvent {
    title: string;
    datetime: Date;
    location: string;
    venue: {
        city: string;
        name: string;
    }
    id: number;
    fee: number;
    eventLink: string;
    artist: {
        image_url: string;
    };
    url: string;
}

export interface IEventContext {
    events: IEvent[] | undefined;
    featuredEvents: IEvent[] | undefined;
    isLoading: boolean;
    updateEvents: (events: IEvent[]) => void;
    toggleIsLoading: () => void;
    loadEventDetails: () => Promise<void>;
    updateFeaturedEvents: React.Dispatch<React.SetStateAction<IEvent[]>>
}
