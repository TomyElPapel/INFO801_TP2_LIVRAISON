CREATE DATABASE IF NOT EXISTS `fabricant-1`;
GRANT ALL PRIVILEGES ON `fabricant-1`.* TO 'myuser'@'%';

CREATE DATABASE IF NOT EXISTS `maitre-1`;
GRANT ALL PRIVILEGES ON `maitre-1`.* TO 'myuser'@'%';

FLUSH PRIVILEGES;