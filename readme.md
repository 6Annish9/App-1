## Development Quick Start

## Run in local docker

1. CD into main folder
1. $ docker-compose build
1. $ docker-compose up -d

## Kubernetes environment

Note that you will need to have been approved for the SYS_DockerEE_User and SYS_DockerEE_sermo to access the kubernetes environments.

### Production

| System              | URL                                                     | Auth                |
| ------------------- | ------------------------------------------------------- | ------------------- |
| Mirantis Kubernetes | https://dockeree.int.comhem.com/                        | VPN                 |
| Kubernetes          | https://pm.dockeree.int.comhem.com                      | VPN                 |
| Kibana              | https://is-it-logs.ece.int.comhem.com                   | VPN, AD             |
| Database            | http://srv-db-pm-2.is.comhem.com/graph/login            | VPN (viewer/viewer) |
| Jenkins             | https://jenkins.dockeree.int.comhem.com/job/CRM-master/ | VPN                 |
| Apex                | https://crm-apex.dockeree.int.comhem.com/alo/#/         | VPN, AD             |

### Test

| System              | URL                                                     | Auth               |
| ------------------- | ------------------------------------------------------- | ------------------ |
| Mirantis Kubernetes | https://dev-dockeree.int.comhem.com/                    | VPN                |
| Kubernetes          | https://pm.dev-dockeree.int.comhem.com                  | VPN                |
| Database            | http://tsrv-db-pm-1.is.comhem.com                       | VPN                |
| Tele2 web           | https://tele2-internal.azure-dev.tele2.com              | SSN ifrån Apex ST  |
| Tele2 web           | https://tele2-internal.azure-stage.tele2.com/           | SSN ifrån Apex QA1 |
| Apex - CI1          | https://crm-apex-ci1.dev-dockeree.int.comhem.com/alo/#/ | VPN,AD             |
| Apex - ST           | https://crm-apex-st.dev-dockeree.int.comhem.com/alo/#/  | VPN,AD             |
| Apex - QA1          | https://crm-apex-qa1.dev-dockeree.int.comhem.com/alo/#/ | VPN,AD             |

### Important git repos

| Type of URL                  | URL                                                         |
| ---------------------------- | ----------------------------------------------------------- |
| Make changes to the pipeline | https://git.is.comhem.com/delivery-platform/pipeline-config |
