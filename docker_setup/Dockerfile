FROM ubuntu:22.04

WORKDIR /root

RUN apt-get update && \
  apt-get install -y unzip curl git

RUN curl -L https://github.com/MordechaiHadad/bob/releases/download/v2.8.1/bob-linux-x86_64.zip -o bob.zip
RUN unzip bob.zip
RUN mv bob-linux-x86_64/bob /usr/local/bin/bob  # Adjust path based on your needs
RUN chmod +x /usr/local/bin/bob

CMD ["bob"]



