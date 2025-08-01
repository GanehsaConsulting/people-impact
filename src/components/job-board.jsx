"use client"

import React, { useState } from 'react';
import { FiUpload, FiFile, FiCheck, FiShield, FiUsers, FiMail, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Title } from './ui/title';
import { FaNewspaper, FaPaperclip } from 'react-icons/fa6';

export const JobBoard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdAF8d7IHa6hM0UjzDQ0f6hzOBbCuPsKewngojLdrhsW-5CkQ/viewform";

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setIsUploaded(false);
        } else {
            alert('Please select a PDF file only.');
        }
    };

    // Di komponen JobBoard, update handleUpload function:
    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append('cv', selectedFile);
        formData.append('name', 'Unknown'); // Bisa diganti dengan input field jika ada
        formData.append('email', 'unknown@email.com'); // Bisa diganti dengan input field jika ada
        formData.append('subject', 'CV Submission');
        formData.append('message', 'CV submission for talent pool consideration');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData, // Kirim sebagai FormData, bukan JSON
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to upload CV');
            }

            setIsUploaded(true);
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed: ' + error.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleGoogleFormSubmit = () => {
        window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <section className="margin spacing">
            <div className="">
                {/* Header */}
                <div className="mb-12 space-y-4">
                    <Title className='capitalize'>
                        Join our <span className="text-main-1">talent pool!</span>
                    </Title>

                    <div className="">
                        <p className="text-lg text-darkColor/80 dark:text-lightColor/80 leading-relaxed mb-8">
                            People Impact also supports our clients in job recruitment. If you're looking for new career
                            opportunities, you can submit your CV to our talent pool. Our recruitment team will review and
                            match your qualifications with available positions from our clients. We'll contact you if there's
                            a suitable opportunity that aligns with your profile.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                    {/* Upload Methods */}
                    <div className="space-y-8">
                        {/* Method 1: Direct Upload */}
                        <div className="bg-lightColor dark:bg-darkColor rounded-main p-8">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 text-2xl font-semibold text-darkColor dark:text-lightColor mb-2">
                                    <FaPaperclip /> Drop your CV here:
                                </div>
                                <p className="text-sm text-darkColor/70 dark:text-lightColor/70">
                                    Upload your CV in PDF format (Max 10MB)
                                </p>
                            </div>

                            {/* Upload Area */}
                            <div className="space-y-4">
                                {!selectedFile ? (
                                    <label className="block">
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                        <div className="border-2 border-dashed border-main-1/30 dark:border-main-1/50 rounded-secondary p-8 text-center cursor-pointer hover:border-main-1/60 dark:hover:border-main-1/70 transition-colors duration-200 bg-main-1/5 dark:bg-main-1/10">
                                            <FiUpload className="w-12 h-12 text-main-1 mx-auto mb-4" />
                                            <p className="text-lg font-medium text-darkColor dark:text-lightColor mb-2">
                                                Click to upload or drag and drop
                                            </p>
                                            <p className="text-sm text-darkColor/60 dark:text-lightColor/60">
                                                PDF files only
                                            </p>
                                        </div>
                                    </label>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Selected File */}
                                        <div className="flex items-center gap-4 p-4 bg-secondaryGray dark:bg-darkColor rounded-secondary">
                                            <FiFile className="w-8 h-8 text-main-3 flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-darkColor dark:text-lightColor truncate">
                                                    {selectedFile.name}
                                                </p>
                                                <p className="text-sm text-darkColor/60 dark:text-lightColor/60">
                                                    {formatFileSize(selectedFile.size)}
                                                </p>
                                            </div>
                                            {isUploaded && (
                                                <FiCheck className="w-6 h-6 text-main-1 flex-shrink-0" />
                                            )}
                                        </div>

                                        {/* Upload Button */}
                                        {!isUploaded && (
                                            <button
                                                onClick={handleUpload}
                                                disabled={isUploading}
                                                className="w-full bg-main-1 hover:bg-main-2 disabled:bg-main-1/50 text-white font-medium py-3 px-6 rounded-secondary transition-colors duration-200 flex items-center justify-center gap-2"
                                            >
                                                {isUploading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        Uploading...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiUpload className="w-5 h-5" />
                                                        Upload CV
                                                    </>
                                                )}
                                            </button>
                                        )}

                                        {/* Success Message */}
                                        {isUploaded && (
                                            <div className="p-4 bg-main-1/10 dark:bg-main-1/20 rounded-secondary border border-main-1/30">
                                                <div className="flex items-center gap-2 text-main-2 dark:text-main-1">
                                                    <FiCheck className="w-5 h-5" />
                                                    <p className="font-medium">CV uploaded successfully!</p>
                                                </div>
                                                <p className="text-sm text-darkColor/70 dark:text-lightColor/70 mt-1">
                                                    Our team will review your profile and contact you if there's a suitable opportunity.
                                                </p>
                                            </div>
                                        )}

                                        {/* Change File */}
                                        <label className="block">
                                            <input
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileSelect}
                                                className="hidden"
                                            />
                                            <button className="w-full text-main-3 hover:text-main-2 font-medium py-2 transition-colors duration-200">
                                                Choose different file
                                            </button>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-secondaryLight dark:border-secondaryDark"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-black text-darkColor/60 dark:text-lightColor/60">
                                    OR
                                </span>
                            </div>
                        </div>

                        {/* Method 2: Google Form */}
                        <div className="bg-lightColor dark:bg-darkColor rounded-main p-8">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 text-2xl font-semibold text-darkColor dark:text-lightColor mb-2">
                                    <FaNewspaper /> Complete Application Form
                                </div>
                                <p className="text-sm text-darkColor/70 dark:text-lightColor/70">
                                    Fill out our comprehensive form with your details and upload your CV
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Form Preview */}
                                <div className="bg-main-3/5 dark:bg-main-3/10 rounded-secondary p-6">
                                    <h4 className="font-semibold text-darkColor dark:text-lightColor mb-3">
                                        What's included in the form:
                                    </h4>
                                    <ul className="space-y-2 text-sm text-darkColor/80 dark:text-lightColor/80">
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-main-3 rounded-full"></div>
                                            Personal Information & Contact Details
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-main-3 rounded-full"></div>
                                            Work Experience & Skills
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-main-3 rounded-full"></div>
                                            CV Upload Section
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-main-3 rounded-full"></div>
                                            Career Preferences
                                        </li>
                                    </ul>
                                </div>

                                {/* Open Form Button */}
                                <button
                                    onClick={handleGoogleFormSubmit}
                                    className="w-full bg-main-3 hover:bg-main-4 text-white font-medium py-4 px-6 rounded-secondary transition-colors duration-200 flex items-center justify-center gap-3 group"
                                >
                                    <span>Open Application Form</span>
                                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    <FiExternalLink className="w-4 h-4" />
                                </button>

                                <p className="text-xs text-center text-darkColor/60 dark:text-lightColor/60">
                                    This will open in a new tab
                                </p>
                            </div>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-sec-1/10 dark:bg-sec-1/20 rounded-secondary p-6 border border-sec-1/30">
                            <div className="flex items-start gap-3">
                                <FiShield className="w-6 h-6 text-sec-3 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-darkColor dark:text-lightColor mb-2 flex items-center gap-2">
                                        Privacy & Confidentiality
                                    </h4>
                                    <p className="text-sm text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
                                        Your information will be kept confidential and only used for recruitment purposes.
                                        We comply with data protection regulations and will not share your information
                                        with third parties without your consent.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center p-6 bg-white dark:bg-secondaryDark rounded-secondary">
                            <p className="text-sm text-darkColor/70 dark:text-lightColor/70 mb-2">
                                Have questions about opportunities?
                            </p>
                            <a
                                href="mailto:careers@peopleimpact.com"
                                className="text-main-3 hover:text-main-2 font-medium transition-colors duration-200"
                            >
                                careers@peopleimpact.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};