export const deleteUserEnhanced = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Log the deletion attempt
    console.log(`Attempting to delete user with ID: ${id}`);
    
    // Find the user first
    const userToDelete = await userModel.findById(id);
    if (!userToDelete) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    // Store user info for logging
    const userEmail = userToDelete.email;
    
    // Delete the user
    const deletedUser = await userModel.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return res.status(404).json({ 
        success: false, 
        message: 'User could not be deleted' 
      });
    }
    
    // Log successful deletion
    console.log(`Successfully deleted user: ${userEmail} (ID: ${id})`);
    
    res.status(200).json({ 
      success: true, 
      message: 'User deleted successfully',
      deletedUser: {
        id: deletedUser._id,
        email: deletedUser.email,
        name: deletedUser.name
      }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete user', 
      error: error.message 
    });
  }
};
