// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
      // handle success
      const topics = data.data
      tabs.appendChild(Tab(topics))
    //   console.log('tab component', Tab(topics))
    //   console.log('page is working', data.data);
    })
    .catch(error => {
      // handle error
      console.log('currently down', error);
    })

    const tabs = document.querySelector('.tabs')
    console.log(tabs);

    function Tab (topicObject) {
        // console.log('topics function', topicObject.topics)

        const tabContainer = document.createElement('div')
        const topic1 = document.createElement('div')
        const topic2 = document.createElement('div')
        const topic3 = document.createElement('div')
        const topic4 = document.createElement('div')
        const topic5 = document.createElement('div')

        tabContainer.classList.add('topics')
        topic1.classList.add('tab')
        topic2.classList.add('tab')
        topic3.classList.add('tab')
        topic4.classList.add('tab')
        topic5.classList.add('tab')

        // console.log('topic object', topicObject);

        topic1.textContent = topicObject.topics[0]
        topic2.textContent = topicObject.topics[1]
        topic3.textContent = topicObject.topics[2]
        topic4.textContent = topicObject.topics[3]
        topic5.textContent = topicObject.topics[4]

        tabContainer.appendChild(topic1)
        tabContainer.appendChild(topic2)
        tabContainer.appendChild(topic3)
        tabContainer.appendChild(topic4)
        tabContainer.appendChild(topic5)

        return tabContainer
    }
