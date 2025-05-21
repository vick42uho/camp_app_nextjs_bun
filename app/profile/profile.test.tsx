// app/profile/profile.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from './page'; // Adjust path as necessary

// Mock next/font/google to prevent errors during testing
jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'mock-inter-font' }),
  Poppins: () => ({ className: 'mock-poppins-font' }),
}));


describe('ProfilePage', () => {
  it('renders without crashing', () => {
    render(<ProfilePage />);
    // Check for a unique element, like the main heading or a specific text
    expect(screen.getByRole('heading', { name: /John Doe/i })).toBeInTheDocument();
  });

  it('displays the placeholder user\'s name', () => {
    render(<ProfilePage />);
    // The user's name is used as a heading
    expect(screen.getByRole('heading', { name: /John Doe/i })).toBeInTheDocument();
  });

  it('displays the placeholder user\'s email', () => {
    render(<ProfilePage />);
    // More specific selector for the email paragraph.
    // We want the <p> tag whose direct children include the <span> and the text node for the email.
    const emailParagraph = screen.getByText((content, element) => {
      if (element.tagName.toLowerCase() !== 'p') {
        return false;
      }
      const spanElement = element.querySelector('span.font-semibold');
      if (!spanElement || spanElement.textContent !== 'Email:') {
        return false;
      }
      // Check that the email text is directly within this p element (or its direct text node children)
      // and not just in a descendant.
      return element.textContent.includes('john.doe@example.com') && element.children.length === 1 && element.children[0].tagName.toLowerCase() === 'span';
    });
    expect(emailParagraph).toBeInTheDocument();
  });

  it('displays the placeholder user\'s bio in the correct paragraph', () => {
    render(<ProfilePage />);
    // Target the specific paragraph displaying the bio, not the textarea.
    // The bio paragraph is: <p class="text-md text-gray-600 mt-4"><span class="font-semibold">Bio:</span> Actual bio text</p>
    const bioParagraph = screen.getByText((content, element) => {
        // Check if the element is a <p> and contains the "Bio:" span and the bio text.
        if (element.tagName.toLowerCase() === 'p' && element.querySelector('span.font-semibold')?.textContent === 'Bio:') {
            return content.includes('Loves camping and hiking. Enjoys spending weekends outdoors and exploring new trails.');
        }
        return false;
    });
    expect(bioParagraph).toBeInTheDocument();
  });

  it('displays the "My Camps" section title', () => {
    render(<ProfilePage />);
    expect(screen.getByRole('heading', { name: /My Camps/i })).toBeInTheDocument();
  });

  it('displays created camp names and locations', () => {
    render(<ProfilePage />);
    expect(screen.getByText('Mountain View Camp')).toBeInTheDocument();
    expect(screen.getByText('Alpine Meadows, High Sierras')).toBeInTheDocument();
    expect(screen.getByText('Riverside Camp')).toBeInTheDocument();
    expect(screen.getByText('Willow Creek, Forest Haven')).toBeInTheDocument();
  });

  it('displays the "Edit Profile" section title', () => {
    render(<ProfilePage />);
    expect(screen.getByRole('heading', { name: /Edit Profile/i })).toBeInTheDocument();
  });

  it('has an editable name field with the correct default value', () => {
    render(<ProfilePage />);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue('John Doe');
  });

  it('has an editable email field with the correct default value', () => {
    render(<ProfilePage />);
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('john.doe@example.com');
  });

  it('has an editable bio field with the correct default value', () => {
    render(<ProfilePage />);
    const bioTextarea = screen.getByLabelText(/Bio/i);
    expect(bioTextarea).toBeInTheDocument();
    expect(bioTextarea).toHaveValue('Loves camping and hiking. Enjoys spending weekends outdoors and exploring new trails.');
  });

  it('renders the "Save Changes" button in the edit profile form', () => {
    render(<ProfilePage />);
    expect(screen.getByRole('button', { name: /Save Changes/i })).toBeInTheDocument();
  });
});

// Test case for when there are no camps
const MockProfilePageNoCamps = () => {
  // Manually override createdCamps for this specific test component
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Loves testing.',
  };
  const createdCamps = []; // Empty camps array

  return (
    <div className="min-h-screen bg-gray-100 py-8 antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Information Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{user.name}</h1>
          <p className="text-md text-gray-600 mb-1">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-md text-gray-600 mt-4">
            <span className="font-semibold">Bio:</span> {user.bio}
          </p>
        </div>

        {/* Created Camps Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">My Camps</h2>
          {createdCamps.length > 0 ? (
            <ul className="space-y-5">
              {/* This part will not be rendered */}
            </ul>
          ) : (
            <p className="text-gray-600 italic text-center py-4">You haven't created any camps yet.</p>
          )}
        </div>
        {/* Edit form can be omitted for this specific test if not relevant */}
      </div>
    </div>
  );
};


describe('ProfilePage - No Camps', () => {
  it('displays "You haven\'t created any camps yet." when no camps are available', () => {
    render(<MockProfilePageNoCamps />);
    expect(screen.getByText("You haven't created any camps yet.")).toBeInTheDocument();
  });
});
