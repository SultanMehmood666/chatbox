import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const dummyUsers = [
  { id: 1, username: 'Alice' },
  { id: 2, username: 'Bob' },
  { id: 3, username: 'Charlie' },
];

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(dummyUsers);

  const handleSend = () => {
    if (input.trim() !== '' && selectedUser) {
      setMessages([
        ...messages,
        { text: input, sender: true, username: 'You' }
      ]);
      setInput('');
      // Simulate receiving a message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: 'Reply from ' + selectedUser.username, sender: false, username: selectedUser.username }
        ]);
      }, 1000);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    setFilteredUsers(dummyUsers.filter(user => user.username.toLowerCase().includes(value.toLowerCase())));
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setMessages([]); // Clear previous messages when a new user is selected
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', py: 2 }}>
        {/* Search Field */}
        <TextField
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearch}
          placeholder="Search for a user..."
          sx={{ mb: 2 }}
        />

        {/* User List */}
        {search && (
          <List>
            {filteredUsers.map(user => (
              <ListItem button key={user.id} onClick={() => handleUserSelect(user)}>
                <ListItemText primary={user.username} />
              </ListItem>
            ))}
          </List>
        )}

        {/* Chat Box */}
        {selectedUser && (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Chat with {selectedUser.username}
            </Typography>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
              {messages.map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: message.sender ? 'flex-end' : 'flex-start',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: message.sender ? '#1976d2' : '#757575', mb: 0.5 }}
                  >
                    {message.username}
                  </Typography>
                  <Box
                    sx={{
                      maxWidth: '60%',
                      bgcolor: message.sender ? '#1976d2' : '#e0e0e0',
                      color: message.sender ? '#fff' : '#000',
                      p: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Typography>{message.text}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}

        {/* Message Input */}
        {selectedUser && (
          <Box sx={{ display: 'flex', mt: 'auto' }}>
            <TextField
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              sx={{ mr: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSend}>
              Send
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ChatPage;
