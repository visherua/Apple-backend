class PubSub {
    constructor() {
        this.events = 
    }
    subscribe(event, callback) {

        let event =
        
        return {
            event: event,
            id: this.sabData.length,
            unsubcribe: () => {
                this.sabData.length,
            }
        }
    }

    publish(event, data) {


        throw new Error('Put your solution here');
    }
}

const events = new PubSub();
//id 1 + event
const test1 = events.subscribe('testEvent1', data =>
    console.log(data, 'test1')
);
//2 + event
const test2 = events.subscribe('testEvent1', data =>
    console.log(data, 'test2')
);
//3 +event
const test3 = events.subscribe('testEvent3', data =>
    console.log(data, 'test3')
);

events.publish('testEvent1', 'some message 1');
events.publish('testEvent3', 'some message 3');
test1.unsubscribe();
events.publish('testEvent1', 'some message 2');