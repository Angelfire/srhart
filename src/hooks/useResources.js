import { useEffect, useState } from 'react';

const useResources = user => {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchResources = async user => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${user}/repos?sort=updated`
      );
      const jsonData = await response.json();
      setResources(jsonData);
    } catch (e) {
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResources(user);
  }, [user]);

  return {
    resources,
    isLoading,
    isError,
  };
};

export default useResources;
