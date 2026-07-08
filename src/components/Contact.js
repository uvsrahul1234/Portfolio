import React, { useRef, useState } from "react";
import { Container, Card, Form, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ph27qfk",
        "template_2porprf",
        form.current,
        "KH_RZFtqVn7FmufOW"
      )
      .then(
        (result) => {
          setModalMessage("Message sent successfully! I'll get back to you soon.");
          setIsSuccess(true);
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          setModalMessage("Failed to send the message, please try again.");
          setIsSuccess(false);
          setShowModal(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="contact-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card contact-card">
          <Card.Body>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card.Title className="theme-card-title section-title">
                Contact Me
              </Card.Title>
              <p className="contact-subtitle">
                Let's connect and explore opportunities together.
              </p>
            </motion.div>
            
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <motion.div variants={itemVariants}>
                <Form.Group controlId="formName" className="form-group-modern">
                  <Form.Label className="form-label-modern">
                    <FiUser className="form-icon" aria-hidden="true" />
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="form-control-modern"
                  />
                </Form.Group>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Form.Group controlId="formEmail" className="form-group-modern">
                  <Form.Label className="form-label-modern">
                    <FiMail className="form-icon" aria-hidden="true" />
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email@gmail.com"
                    required
                    className="form-control-modern"
                  />
                </Form.Group>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Form.Group controlId="formMessage" className="form-group-modern">
                  <Form.Label className="form-label-modern">
                    <FiMessageSquare className="form-icon" aria-hidden="true" />
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Type your message here..."
                    required
                    className="form-control-modern textarea-modern"
                  />
                </Form.Group>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="submit-button-container"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="submit-button-modern"
                    disabled={isLoading}
                    aria-busy={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="loading-spinner"
                      />
                    ) : (
                      <>
                        <FiSend className="button-icon" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </Form>
          </Card.Body>
        </Card>
      </motion.div>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton className="modal-header-modern">
          <Modal.Title className={isSuccess ? "text-success" : "text-danger"}>
            {isSuccess ? "Success!" : "Error"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-modern">
          {modalMessage}
        </Modal.Body>
        <Modal.Footer className="modal-footer-modern">
          <Button 
            variant={isSuccess ? "success" : "danger"} 
            onClick={() => setShowModal(false)}
            className="modal-button-modern"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;