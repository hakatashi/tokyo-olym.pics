import voronoi from 'voronoi-diagram';

export default (points, board) => {
	const {positions, cells} = voronoi(points);

	const visitedPoints = new Set();
	let maxDist = 0;
	let maxPoint = null;
	for (const [pointIndex, positionIndices] of cells.entries()) {
		const [pointX, pointY] = points[pointIndex];

		for (const positionIndex of positionIndices) {
			if (positionIndex === -1) {
				continue;
			}

			if (visitedPoints.has(positionIndex)) {
				continue;
			}

			const [x, y] = positions[positionIndex];
			if (x <= 0 || x >= board.width || y <= 0 || y >= board.height) {
				continue;
			}

			const dist = Math.sqrt((pointX - x) ** 2 + (pointY - y) ** 2);
			if (maxDist < dist) {
				maxDist = dist;
				maxPoint = {x, y};
			}

			visitedPoints.add(positionIndex);
		}
	}

	return maxPoint;
};
