"use client";

import {
	useDisclosure,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Tooltip,
	Spinner,
} from "@nextui-org/react";
import { FaUpload } from "react-icons/fa";
import Dropzone from "react-dropzone";
import { Text } from "@/components/text";
import { FileIcons } from "@/components/tables/dowload/FileIcons";
import { cloneElement, useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { MdDelete } from "react-icons/md";
import { uploadFile } from "@/app/_actions/files";
import { IoMdCloudUpload } from "react-icons/io";

export function UploadModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [myFiles, setMyFiles] = useState<
		{ file: File; isFinished: boolean; isLoading: boolean }[]
	>([]);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		setMyFiles((prevFiles) => [
			...prevFiles,
			...acceptedFiles.map((file) => ({
				file,
				isLoading: false,
				isFinished: false,
			})),
		]);
	}, []);

	return (
		<>
			<Tooltip content="Subir un archivo">
				<Button onPress={onOpen} isIconOnly color="primary" radius="sm">
					<FaUpload />
				</Button>
			</Tooltip>{" "}
			<Modal
				as="form"
				radius="sm"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onSubmit={async (e) => {
					e.preventDefault();

					for (const { file } of myFiles) {
						setMyFiles((prevFiles) =>
							prevFiles.map((prevFile) => {
								if (prevFile.file === file) {
									return { ...prevFile, isLoading: true };
								}
								return prevFile;
							}),
						);

						await uploadFile(file.name, file);

						setMyFiles((prevFiles) =>
							prevFiles.map((prevFile) => {
								if (prevFile.file === file) {
									return { ...prevFile, isLoading: false, isFinished: true };
								}
								return prevFile;
							}),
						);
					}
				}}
				isKeyboardDismissDisabled={true}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-2xl">
								Subir un archivo publico
							</ModalHeader>
							<ModalBody>
								<Dropzone
									onDrop={onDrop}
									noKeyboard
									maxSize={20971520}
									multiple
									maxFiles={3}
								>
									{({ getRootProps, getInputProps, open, inputRef }) => {
										const handleRemoveFile = useCallback(
											(fileName: string) => {
												if (!inputRef.current?.files) {
													return;
												}

												const dt = new DataTransfer();
												const files = Array.from(inputRef.current.files);

												for (let i = 0; i < files.length; i++) {
													const file = files[i];
													if (file.name !== fileName) {
														dt.items.add(file);
													}
												}

												inputRef.current.files = dt.files;
												setMyFiles(
													Array.from(dt.files).map((file) => ({
														file,
														isLoading: false,
														isFinished: false,
													})),
												);
											},
											[inputRef],
										);

										const handleClearFile = useCallback(() => {
											setMyFiles(Array.from([]));
										}, []);

										// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
										const files = useMemo(
											() =>
												myFiles.map((files) => {
													const { file } = files;

													const iconElement =
														FileIcons.find(
															(icon) => Object.keys(icon)[0] === file.type,
														)?.[file.type] ||
														(FileIcons.find(
															(icon) => Object.keys(icon)[0] === "default",
														)?.default as {
															icon: JSX.Element;
															color: string;
														});

													return (
														<li
															key={file.name + file.size + file.lastModified}
															className="inline-flex justify-between items-center gap-3 w-full"
														>
															<div className="inline-flex gap-3 flex-center">
																<div
																	className={`bg-${iconElement.color} w-fit p-1 flex flex-center rounded-md text-white`}
																>
																	{cloneElement(iconElement.icon, {
																		size: 20,
																	})}
																</div>
																{file.name}
															</div>
															{files.isLoading ? (
																<Spinner size="sm" />
															) : files.isFinished ? (
																<IoMdCloudUpload className="fill-primary text-2xl" />
															) : (
																<Button
																	onPress={() => handleRemoveFile(file.name)}
																	color="danger"
																	size="sm"
																	radius="sm"
																	variant="flat"
																	isIconOnly
																>
																	<MdDelete />
																</Button>
															)}
														</li>
													);
												}),
											[handleRemoveFile, myFiles],
										);

										return (
											<section className="w-full flex flex-col gap-6 mt-6">
												<div
													className={cn(
														"border-dashed p-12 border-foreground/50 border-2",
													)}
													{...getRootProps()}
												>
													<input ref={inputRef} {...getInputProps()} />
													<div className="flex flex-center flex-col gap-6">
														<Text align="center" className="text-foreground/50">
															Arrastre y suelte algunos archivos aquí o haga
															clic para seleccionar archivos (Máximo 3)
														</Text>
														<Button
															onPress={open}
															className="max-w-fit"
															size="sm"
															radius="sm"
														>
															Seleccionar archivos
														</Button>
													</div>
												</div>

												{files && (
													<div className="flex flex-col gap-2">
														<Text
															size="heading-3"
															className="text-md mb-4 mt-2"
														>
															Preparados {`${files.length}/3`}
														</Text>
														<ul className="flex flex-col gap-2 w-full items-start justify-center">
															{files}
														</ul>
													</div>
												)}
												{files.length === 3 && (
													<Button
														onPress={handleClearFile}
														className="max-w-fit"
														size="sm"
														radius="sm"
														variant="flat"
														color="warning"
													>
														Limpiar todos
													</Button>
												)}
											</section>
										);
									}}
								</Dropzone>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Cerrar
								</Button>
								<Button color="primary" type="submit">
									Subir
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
