// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import { Pagination } from './Pagination';
// import { expect, vi, test, describe } from 'vitest';

// describe('Pagination', () => {
//   test('updates URL query parameter when page changes', () => {
//     const mockSetSearchParams = vi.fn();

//     render(<Pagination page={3} setSearchParams={mockSetSearchParams} />);

//     const prevButton = screen.getByTestId('prev-btn');
//     fireEvent.click(prevButton);

//     expect(mockSetSearchParams).toHaveBeenCalledWith(expect.any(Function));
//     expect(mockSetSearchParams).toHaveBeenCalledWith(
//       expect.objectContaining({
//         get: expect.any(Function),
//         set: expect.any(Function),
//       })
//     );
//     expect(mockSetSearchParams.mock.calls[0][0] instanceof Function).toBe(true);
//   });
// });
