export type inputType = {
    name:string;
    lastname:string;
}

export type Item={
    id:any;
    name:string;
    date:string;
    hour:string;
}

export type stateType = {
    todo: {
        title: string;
        items: Item[];
    };
    inprogress: {
        title: string;
        items: Item[];
    };
    done: {
        title: string;
        items: Item[];
    };
}