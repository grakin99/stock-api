/**
 * @param {Object} data passed from get-data.js
 * @function template provides a template literal and fills it with data using the moustache.js templating engine via cdn (node does not work with current implementation)
 * */ 

function template(data) {
  return Mustache.render(
    `
      <section class="stock-info-container">
          <h3><span>Ticker: {{Symbol}}<span></h3>
        <div>
          <h4>Price</h4>
          <p>$USD {{Price}}</p>
        </div>
        <div>
          <h4>Last Trading Date</h4>
         <p>{{Date}}</p>
        </div>
        <div>
         <h4>Open</h4>
          <p>$USD {{Open}}</p>
       </div>
        <div>
          <h4>Close</h4>
          <p>$USD {{Close}}</p>
        </div>
        <div>
         <h4>High</h4>
         <p>$USD {{High}}</p>
        </div>
       <div>
        <h4>Low</h4>
        <p>$USD {{Low}}</p>
      </div>
      <div>
        <h4>Change Percentage</h4>
        <p>{{ChangePercent}} %</p>
      </div>
      </section>
  `,

    data
  );
}
export default template;
