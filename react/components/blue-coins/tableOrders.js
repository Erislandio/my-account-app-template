import React from 'react';
import { fakeOrders } from '../mock/fake-orders';
import { Button } from 'vtex.styleguide';

export const TableOrders = () => {
	const totalValueOfBlueCoins = fakeOrders.reduce((acc, curr) => {
		return curr.value + acc;
	}, 0);

	return (
		<div className="table-container">
			{fakeOrders.map((item) => {
				return (
					<div className="table-item" key={item.orderNumer}>
						<span className="order-number">
							<label>N° DO PEDIDO</label>
							<p>{item.orderNumer}</p>
						</span>
						<span className="order-date">
							<label>DATA DO PEDIDO</label>
							<p>{item.data}</p>
						</span>
						<span className="order-op">
							<label>OPERAÇÃO</label>
							<p className={item.operation}>{item.operation}</p>
						</span>
						<span className="order-value">
							<p className={item.operation}>{item.value}</p>
							<img
								src="https://lh3.googleusercontent.com/proxy/K8j4QkwxXxQyvuYQijbyMSrScdfVzaZPEXLJhp90h1waPBuW8MHR61RVSyUZReq7kJeXiZ7aEmC8rz-gGyU5LPCc9SNIxgdmzjQmKzTwupPyt1Yswyysdzg2ttMNRTA"
								style={{ maxWidth: '60px' }}
							/>
						</span>
					</div>
				);
			})}
			<span className="total-value">
				<h4>Total:</h4>
				<span>
					<h3>{totalValueOfBlueCoins}</h3>
					<img
						src="https://lh3.googleusercontent.com/proxy/K8j4QkwxXxQyvuYQijbyMSrScdfVzaZPEXLJhp90h1waPBuW8MHR61RVSyUZReq7kJeXiZ7aEmC8rz-gGyU5LPCc9SNIxgdmzjQmKzTwupPyt1Yswyysdzg2ttMNRTA"
						style={{ maxWidth: '100px' }}
					/>
				</span>
			</span>
			<span className="button-container">
				<Button onClick={() => (window.location.href = '/')}>Comprar com Blue Coins</Button>
			</span>
		</div>
	);
};
[];
