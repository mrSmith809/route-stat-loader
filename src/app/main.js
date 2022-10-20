import { modalBg } from './modal-bg/modal-bg';
import { routeDetails } from './route-details/route-details';
import { store } from './core/store';
import { store2 } from './core/store2';
import { renderer } from './core/renderer';
import { httpHandler } from './core/httpHandler';

modalBg.init([
    () => routeDetails.hide()]);

routeDetails.closeBtn.init([
    () => modalBg.hide(),
    () => routeDetails.hide()]);

store2.init({ tableName: 'Route', primaryKey: 'route_name', relation: 'Borough' })
    .init({ tableName: 'Borough', primaryKey: 'borough' });

// Example: http://ip_or_domainName:port/
const domain = './json_dataset.json';
// DO NOT CHANGE!!!
const apiUri = domain + httpHandler.getParameters();

httpHandler.getAsync( apiUri ).then((responseData) => {
    
    store.load( responseData );
    store.sortByOrderNum();

    // store2
    // store2.loadAsync(responseData.routes).then(() => {
    
        // const initialDataset = store2.getUnique('Borough');
        const initialDataset = store.getBoroughsWithUniqueRoutes();

        renderer
            .init('.borough-container', initialDataset)
            .render(obj => obj.template())
            .then(() => {
                
                renderer
                    .afterRender(elem => {

                        const routes = store.getRoutesByName(elem.id);

                        renderer
                            .init('.route-detail', routes)
                            .render(obj => obj.template('equipment_id', 'pctcomp_specific'))
                            .then(() => {
                                renderer.afterRender();
                                routeDetails.selectedRoute.element.textContent = routes[0].fullName;
                                routeDetails.show();
                                modalBg.show();
                        });
                });
        });
    // store2
    // });
});
