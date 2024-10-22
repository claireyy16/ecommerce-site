import '../styles/styles.css';
import {Row, Col} from 'react-bootstrap';
import { PRODUCTS } from '../productsArr';
import ProductCard from '../components/productCard';

function Store() {
    return (
    <>
        <h1 align="center" className="p-3">shopping time</h1>
        <Row xs={1} md={3} className="g-4">
            {PRODUCTS.map((product, idx) => (
                <Col align="center" key={idx}>
                    <ProductCard product={product}></ProductCard>
                </Col> 
            ))}

        </Row>
        </>
    )
}
    
export default Store;